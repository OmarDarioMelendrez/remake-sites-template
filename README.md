# Multi-site Template with Next.js

This is a template for creating multiple websites with Next.js, designed to be easily adaptable to different industries and needs.

## Features

- Developed with Next.js 14 and App Router
- Responsive design with Tailwind CSS
- Reusable components
- TypeScript typing
- Easy customization of colors and styles
- SEO optimized

## Project Structure

```
remake-template/
├── public/            # Static files
├── src/
│   ├── app/           # Application routes
│   │   ├── page.tsx   # Main page
│   │   └── layout.tsx # Main layout
│   ├── components/    # Reusable components
│   │   ├── ui/        # Basic UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/           # Utilities and functions
│   └── constants/     # Constants and configuration
```

## How to Use

### Installation

1. Clone this repository:

```bash
git clone [REPOSITORY_URL]
```

2. Install dependencies:

```bash
cd remake-template
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Customization

#### Colors and Theme

You can customize colors and theme by modifying the CSS variables in `src/app/globals.css`.

#### Content

1. Modify texts and images in the components according to your client's needs.
2. Update routes in the Header and Footer components.
3. Customize specific components for each industry.

#### Deployment

To build the production version:

```bash
npm run build
```

## Main Components

- **Header**: Responsive navigation bar
- **Footer**: Footer with contact information and links
- **Hero**: Main section of the home page
- **WhatsAppButton**: Floating button for WhatsApp contact

## License

This project is under the MIT license.
