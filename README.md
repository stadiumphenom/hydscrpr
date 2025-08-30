[README.md](https://github.com/user-attachments/files/22059844/README.md)
# HYDSKRPR: Gumroad Product Explorer

HYDSKRPR is a browser-based intelligence tool to scrape and explore product listings from Gumroad. Built for creators, researchers, and digital entrepreneurs.

## Features
- Scrape visible Gumroad product listings
- Filter by price, tags, keywords
- Export data to JSON or CSV
- Visual analytics (price ranges, top tags, etc.)
- Built with TailwindCSS + Chart.js
- Hosted on GitHub Pages

## Legal Note
This tool scrapes publicly accessible data. Use responsibly. Do not use this to harass or replicate creators without fair use or attribution.

## Local Development
```bash
git clone https://github.com/YOUR_USERNAME/hydscrpr.git
cd hydscrpr
open index.html
```

## Exported Data Format
```json
[
  {
    "title": "AI Prompt Pack",
    "price": 12,
    "tags": ["ai", "chatgpt", "tools"],
    "url": "https://gumroad.com/l/abc123"
  }
]
```

## Live Demo
[https://YOUR_USERNAME.github.io/hydscrpr](https://YOUR_USERNAME.github.io/hydscrpr)
