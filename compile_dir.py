"""
This script collects files of specified types (or all files if configured) along with
a directory tree structure and outputs them to a "compiled_output.md" file.

You can use the generated Markdown file to send the repository contents to an AI
for analysis, questions, or to propose code modifications.
"""

# Configuration
INCLUDED_FILE_TYPES = {
    "js": "javascript",
    "jsx": "javascript",
    "css": "css",
    "json": "json",
}

EXCLUDED_DIRECTORIES = {"node_modules", ".git", "dist", "build", "coverage"}
EXCLUDED_FILES = {"package-lock.json"}

INCLUDE_ALL_FILE_TYPES = False  # Set to True to include all files

# To limit processing to specific top-level directories, provide a list.
# Set to None or an empty list to process the entire directory.
# Examples:
#   LIMIT_TO_DIRECTORY = ["src", "service", "desktop-agent"]
#   LIMIT_TO_DIRECTORY = "src"  # (a single string will be treated as a one-item list)
LIMIT_TO_DIRECTORY = []  # Example directories to include

import os


def should_skip_directory(dir_name):
    """Check if a directory should be skipped."""
    return dir_name in EXCLUDED_DIRECTORIES


def is_target_file(filename):
    """Check if the file should be included based on its extension and filename."""
    if filename in EXCLUDED_FILES:
        return False
    if INCLUDE_ALL_FILE_TYPES:
        return True  # Include all files if option is enabled
    extension = filename.split(".")[-1].lower()
    return extension in INCLUDED_FILE_TYPES


def get_language_for_fence(filename):
    """Get the appropriate language identifier for the code fence."""
    extension = filename.split(".")[-1].lower()
    return INCLUDED_FILE_TYPES.get(extension, "")


def print_directory_structure(directory, output_file):
    """Print the directory structure in a tree-like format."""
    output_file.write("# Directory Structure\n\n```\n")

    def has_target_files(dir_path):
        """Check if a directory or its subdirectories contain target files."""
        for root, dirs, files in os.walk(dir_path):
            dirs[:] = [d for d in dirs if not should_skip_directory(d)]
            if any(is_target_file(f) for f in files):
                return True
        return False

    def write_tree(dir_path, prefix=""):
        items = sorted(os.listdir(dir_path))
        filtered_items = []

        for item in items:
            full_path = os.path.join(dir_path, item)
            if os.path.isdir(full_path):
                if not should_skip_directory(item) and has_target_files(full_path):
                    filtered_items.append((item, True))
            elif is_target_file(item):
                filtered_items.append((item, False))

        for i, (item, is_dir) in enumerate(filtered_items):
            is_last = i == len(filtered_items) - 1
            current_prefix = "└── " if is_last else "├── "
            full_path = os.path.join(dir_path, item)

            output_file.write(f"{prefix}{current_prefix}{item}\n")
            if is_dir:
                next_prefix = "    " if is_last else "│   "
                write_tree(full_path, prefix + next_prefix)

    write_tree(directory)
    output_file.write("```\n\n")


def generate_repository_markdown(directory, output_filename="compiled_output.md"):
    """
    Generate a Markdown file containing:
    1. Directory structure (showing only relevant directories and files)
    2. Source code from all included file types

    Args:
        directory: The base directory to search for files
        output_filename: The name of the output Markdown file
    """
    with open(output_filename, "w", encoding="utf-8") as outfile:
        # If LIMIT_TO_DIRECTORY is provided, process only those top-level directories
        if LIMIT_TO_DIRECTORY:
            # Convert a single string to a list if necessary
            if isinstance(LIMIT_TO_DIRECTORY, str):
                directories_to_process = [LIMIT_TO_DIRECTORY]
            else:
                directories_to_process = LIMIT_TO_DIRECTORY

            for sub_dir in directories_to_process:
                sub_directory_path = os.path.join(directory, sub_dir)
                if not os.path.exists(sub_directory_path):
                    print(f"Error: The directory '{sub_dir}' does not exist.")
                    continue

                outfile.write(f"# {sub_dir}\n\n")
                print_directory_structure(sub_directory_path, outfile)

                outfile.write(f"# Source Code for {sub_dir}\n\n")
                for root, dirs, files in os.walk(sub_directory_path):
                    dirs[:] = [d for d in dirs if not should_skip_directory(d)]
                    for file in sorted(files):
                        if is_target_file(file):
                            filepath = os.path.join(root, file)
                            # Make the relative path with respect to the current subdirectory
                            relative_path = os.path.relpath(filepath, sub_directory_path)

                            outfile.write(f"## {relative_path}\n\n")
                            language = get_language_for_fence(file)
                            outfile.write(f"```{language}\n")

                            try:
                                with open(filepath, "r", encoding="utf-8") as infile:
                                    outfile.write(infile.read())
                            except UnicodeDecodeError:
                                outfile.write(
                                    f"[Binary file or non-UTF-8 encoding: {relative_path}]"
                                )

                            outfile.write("\n```\n\n")
        else:
            # Process the entire directory
            print_directory_structure(directory, outfile)
            outfile.write("# Source Code\n\n")
            for root, dirs, files in os.walk(directory):
                dirs[:] = [d for d in dirs if not should_skip_directory(d)]
                for file in sorted(files):
                    if is_target_file(file):
                        filepath = os.path.join(root, file)
                        relative_path = os.path.relpath(filepath, directory)

                        outfile.write(f"## {relative_path}\n\n")
                        language = get_language_for_fence(file)
                        outfile.write(f"```{language}\n")

                        try:
                            with open(filepath, "r", encoding="utf-8") as infile:
                                outfile.write(infile.read())
                        except UnicodeDecodeError:
                            outfile.write(f"[Binary file or non-UTF-8 encoding: {relative_path}]")

                        outfile.write("\n```\n\n")


if __name__ == "__main__":
    target_directory = "."  # Default to the current directory
    generate_repository_markdown(target_directory)
