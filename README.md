
# Now I Can - CS 356 Group 4 V2 site

## Technologies Used

*   **Frontend Framework:** React 18+
*   **Build Tool:** Vite
*   **Routing:** React Router DOM v6
*   **Styling:**
    *   Tailwind CSS (v3) - Utility-first CSS framework
    *   PostCSS & Autoprefixer (for Tailwind compatibility)
    *   Custom CSS (`App.css`, `index.css`) for global styles, animations, and overrides.
*   **Linting:** ESLint (with React hooks and refresh plugins)
*   **Server (Basic):** Express.js (for serving static build files and implementing basic security headers via Helmet)
*   **Node.js Environment**

---

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ammonwk/nowican.git
    cd nowican
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## Running the Application

1.  **Development Mode:**
    *   Starts the Vite development server with Hot Module Replacement (HMR).
    ```bash
    npm run dev
    ```
    *   Open your browser to `http://localhost:5173` (or the port specified by Vite).

2.  **Production Build:**
    *   Builds the optimized static assets for production in the `dist` folder.
    ```bash
    npm run build
    ```
    *   **Serve the Production Build:**
        *   The project includes a basic Express server (`service/index.js`) configured to serve the `dist` folder.
        ```bash
        node service/index.js
        ```
        *   Access the application at `http://localhost:6000` (or the port specified in `service/index.js`).

---

## Key Features & Rubric Highlights

This section details how the project meets the specific requirements outlined in the course rubric.

### Site Implementation (Easy Screens/Lists/Forms)

*   **User-Friendly Forms:** Several forms were implemented with user experience in mind:
    *   `src/pages/families/FreeConsultation.jsx`: A multi-step form guides users through the consultation request process, breaking down information into logical sections (Patient Info, Parent Info, Location, Review). This improves usability compared to a single long form.
    *   `src/components/families/AccommodationBooking.jsx`: Another multi-step form for booking, with clear steps (Location/Dates, Select Accommodation, Details, Review).
    *   `src/components/families/PaymentProcessor.jsx`: A dedicated component (though currently a demo) for handling payments, separating this concern.
    *   `src/pages/involved/VolunteerOpportunities.jsx`: Includes a clear application form with relevant fields.
    *   `src/pages/contactUs.jsx`: Standard contact form implementation.
*   **Clear Information Display:**
    *   `src/pages/therapy/TherapySchedule.jsx`: Displays therapy sessions in a sortable/filterable table format (though sorting/filtering logic might be basic in the current implementation). Uses color-coding for availability status.
    *   `src/pages/about/OurTeam.jsx`, `src/pages/involved/OurDonors.jsx`: Utilize card layouts to present team members and donors clearly. `OurTeam` includes filtering by location.
    *   `src/pages/therapy/ConsolidatedTreatmentMethods.jsx`: Uses a tabbed interface to organize different treatment methods, making complex information digestible.
*   **Layout & Flow:** Pages follow a consistent structure with `Navbar` and `Footer`. Navigation is designed to guide users through related content (e.g., nested routes in `App.jsx`). Components like `ConsultationFlowChart.jsx` visually explain processes.

### CRUD Components & Data Handling

*   **Data Source:** As per rubric allowance, the project primarily uses **static JSON data or hardcoded data within components**. Examples:
    *   `src/components/families/AccommodationBooking.jsx`: Mock accommodation data.
    *   `src/pages/about/OurTeam.jsx`: Hardcoded team/board member data.
    *   `src/pages/involved/OurDonors.jsx`: Mock donor data.
    *   `src/pages/therapy/TherapySchedule.jsx`: Hardcoded schedule data.
    *   No external API or database is currently integrated.
*   **CRUD Operations:**
    *   **Create:** Implemented through various forms (Consultation, Booking, Volunteer, Contact) which collect user data. State management (`useState`) handles form data before submission (currently logged to console).
    *   **Read:** Implemented extensively through components displaying the static/mock data (Team page, Donors page, Schedule page, Treatment Methods page, etc.).
    *   **Update/Delete:** Not applicable in the current scope with static data. Filters (like on the Team page) provide a way to *view* subsets of data.

### Site Layout / Look and Feel

*   **CSS Framework:** **Tailwind CSS** is implemented throughout the project (`tailwind.config.js`, `index.css`). This provides a consistent utility-based styling approach.
*   **Layout:** A standard web layout is used:
    *   Fixed Header: `src/components/layout/Navbar.jsx`
    *   Main Content Area: Managed by React Router in `src/App.jsx`
    *   Footer: `src/components/layout/Footer.jsx`
    *   Consistent Container: A `container-custom` class (defined in `index.css`, uses Tailwind's `@apply`) likely ensures consistent content width.
*   **Alignment:** Tailwind's utilities (flexbox, grid, text alignment) are used to maintain consistent alignment of sections, labels, and content.
*   **Desirable Features:**
    *   **Fonts:** Two distinct fonts are used: `Inter` (sans-serif) for body text and `Poppins` (heading) for headings, configured in `tailwind.config.js`.
    *   **Logo:** A logo (`now-i-can-logo.png`) is used in the `Navbar` and `Footer`. *(Ensure the logo file exists in `src/assets/images/`)*
    *   **Gradients:** Used effectively in the `Footer`, `HeroSection` overlay, CTA sections (`src/pages/Home.jsx`), and the `text-gradient` utility class (`index.css`).
    *   **Shadows:** Drop shadows (`shadow-md`, `shadow-lg`, etc.) are applied to cards and other elements (`index.css` components layer, various components) to add depth.
    *   **Color Palette:** A custom, kid-friendly color palette (primary blue and orange) is defined and used consistently (`tailwind.config.js`).

### Responsiveness

*   **Tailwind Responsive Modifiers:** The site utilizes Tailwind CSS's responsive design features (e.g., `md:`, `lg:` prefixes) to adapt layout and styling for different screen sizes.
*   **Mobile Navigation:** The `src/components/layout/Navbar.jsx` includes a functional mobile "hamburger" menu that toggles navigation links for smaller screens.
*   **Layout Adaptation:** Grid layouts (`grid-cols-`) and flexbox utilities are used with responsive prefixes to reflow content appropriately on smaller devices.

### Code Quality & Organization

*   **Build Process:** The project uses Vite and standard `npm` scripts (`npm install`, `npm run dev`, `npm run build`), ensuring a clean build process.
*   **Organization:**
    *   The `src` folder is well-structured with clear separation of concerns: `components`, `pages`, `assets` (implied), `service` (for the simple server).
    *   Components are further organized by feature/section (e.g., `components/families`, `pages/about`).
    *   Page components handle routing and layout, while reusable UI elements are in `components`.
*   **Modularity & Reusability (DRY):**
    *   Layout components (`Navbar`, `Footer`) are reused across all pages.
    *   UI components like `ContentReminder` are created for reuse.
    *   Utility classes in Tailwind and custom components (`btn`, `card` in `index.css`) promote DRY principles.
*   **Maintainability & Naming:** Component and file names are generally descriptive (e.g., `AccommodationBooking`, `TherapySchedule`), making the codebase easier to navigate and maintain.
*   **Comments:** Code includes comments where necessary to clarify logic or intent (though could be expanded).
*   **Efficiency:** Standard React practices (like `useState`, `useEffect`) are used. The simple Express server is lightweight for its purpose.

### Comparison with Our Updated Project against Old Version

## Our Updated Project

<img width="450" alt="Screenshot 2025-06-28 at 1 19 30 PM" src="https://github.com/user-attachments/assets/3689f896-71b4-40a8-b7f3-c47aa4863b39" />

<img width="450" alt="Screenshot 2025-06-28 at 1 19 56 PM" src="https://github.com/user-attachments/assets/025056f9-3959-405e-a2d1-a2973d2cbfda" />

<img width="450" alt="Screenshot 2025-06-28 at 1 20 19 PM" src="https://github.com/user-attachments/assets/1fe0c732-3946-4667-9b90-0cdb34d556ea" />

<img width="450" alt="Screenshot 2025-06-28 at 1 20 40 PM" src="https://github.com/user-attachments/assets/e79904e5-2bbb-4914-ab7e-420f8d20e5fd" />

## Old Version

<img width="450" alt="Screenshot 2025-06-28 at 1 22 17 PM" src="https://github.com/user-attachments/assets/19f38099-b864-4991-97f1-d64be33e0571" />

<img width="450" alt="Screenshot 2025-06-28 at 1 22 35 PM" src="https://github.com/user-attachments/assets/9c65d635-d0a7-4b10-8f5d-b9e7202801f1" />

<img width="450" alt="Screenshot 2025-06-28 at 1 23 17 PM" src="https://github.com/user-attachments/assets/e40f93b3-30ec-40fc-a4b8-5ec8a97cacc6" />

<img width="450" alt="Screenshot 2025-06-28 at 1 23 45 PM" src="https://github.com/user-attachments/assets/f2d3f5ef-c8e0-401b-b7e2-d3b5d8803d5f" />
