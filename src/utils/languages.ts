export interface Language {
    name: string;
    iconName: string;
    className?: string;
    important: boolean;
}

export const languages: Record<string, Language> = {
    angular: {
        name: "Angular",
        iconName: "angular",
        important: false,
    },
    astro: {
        name: "Astro",
        iconName: "astro",
        important: false,
    },
    bootstrap: {
        name: "Bootstrap",
        iconName: "bootstrap",
        important: false,
    },
    cloudflare: {
        name: "Cloudflare",
        iconName: "cloudflare",
        important: false,
    },
    html: {
        name: "HTML 5",
        iconName: "html",
        important: false,
    },
    javascript: {
        name: "JavaScript",
        iconName: "javascript",
        important: false,
    },
    mongo: {
        name: "MongoDb",
        iconName: "mongo",
        important: false,
    },
    mysql: {
        name: "MySQL",
        className: "bg-[#f6ece1]!",
        iconName: "mysql",
        important: false,
    },
    wordpress: {
        name: "Wordpress",
        iconName: "wordpress",
        important: false,
    },
    node: {
        name: "Node.js",
        iconName: "node",
        important: false,
    },
    tailwind: {
        name: "Tailwind CSS",
        iconName: "tailwind",
        important: false,
    },
    figma: {
        name: "Figma",
        iconName: "figma",
        important: false,
    },
    firebase: {
        name: "Firebase",
        iconName: "firebase",
        important: false,
    },
    markdown: {
        name: "Markdown",
        iconName: "markdown",
        important: false,
    },
    php: {
        name: "PHP",
        iconName: "php",
        important: false,
    },
    sass: {
        name: "Sass",
        iconName: "sass",
        important: false,
    },
    ts: {
        name: "TypeScript",
        iconName: "typescript",
        important: false,
    },
    git: {
        name: "Git",
        iconName: "git",
        important: false,
    },
    css: {
        name: "CSS",
        iconName: "css",
        important: false,
    },
    vercel: {
        name: "Vercel",
        iconName: "vercel",
        important: false,
    },
    netlify: {
        name: "Netlify",
        iconName: "netlify",
        important: false,
    },
    gatsby: {
        name: "Gatsby",
        iconName: "gatsby",
        important: false,
    },
    windsurf: {
        name: "Windsurf",
        iconName: "windsurf-logo",
        important: false,
    },
    cursor: {
        name: "Cursor",
        iconName: "cursor-ia",
        important: false,
    },
    deepseek: {
        name: "DeepSeek",
        iconName: "deepseek",
        important: false,
    },
    python: {
        name: "Python",
        iconName: "python",
        important: false,
    },
    cpp: {
        name: "C++",
        iconName: "cpp",
        important: true,
    },
    c: {
        name: "C",
        iconName: "c",
        important: false,
    },
    java: {
        name: "Java",
        iconName: "java",
        important: true,
    },
    opengl: {
        name: "OpenGL",
        iconName: "opengl",
        important: true,
    },
    vulkan: {
        name: "Vulkan",
        iconName: "vulkan",
        important: true,
    },
    kotlin: {
        name: "Kotlin",
        iconName: "kotlin",
        important: true,
    },
    csharp: {
        name: "C#",
        iconName: "csharp",
        important: true,
    },
    rust: {
        name: "Rust",
        iconName: "rust",
        important: false,
    },
    unity: {
        name: "Unity",
        iconName: "unity",
        important: true,
    }
};

export const getLanguage = (lang: string): Language => {
    return languages[lang] || languages.html;
}; 