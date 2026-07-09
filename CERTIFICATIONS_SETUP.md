# Portfolio Certifications - Image Setup Guide

Your portfolio gallery is ready! It displays 8 professional certifications in an elegant gallery format. Here's how to add the certification images.

## Quick Setup

### Option 1: Drag Images Directly (Easiest)

You can copy your certification badges and certificates to:
```
c:\portfolio\portfolio\public\certifications\
```

And name them:
1. `aws-cloud-practitioner.png` - Your AWS Cloud Practitioner badge
2. `aws-developer-associate.png` - Your AWS Developer Associate badge  
3. `azure-administrator.png` - Your Microsoft Azure Administrator badge
4. `databricks-fundamentals.png` - Your Databricks Fundamentals certificate
5. `ibm-gen-ai-python.png` - IBM Gen AI + Python certificate
6. `ibm-data-analysis.png` - IBM Data Analysis certificate
7. `ibm-ai-flask.png` - IBM AI + Flask certificate
8. `ibm-python-data-science.png` - IBM Python for Data Science certificate

### Option 2: Download from Credential Platforms

If you need to re-download your certificates:

- **AWS**: Login to your AWS account, go to AWS Credential Management, download badges
- **Microsoft**: Visit your Microsoft Learn dashboard and download your badge
- **Databricks**: Check your Databricks Academy credentials page
- **IBM/Coursera**: Go to your Coursera profile and download each course certificate

### Option 3: Use Certificate Verification Links

Your certificates display with links. You can verify them online:

- AWS Cloud Practitioner: https://www.credly.com/{your-credential-id}
- AWS Developer Associate: https://www.credly.com/{your-credential-id}
- Azure Administrator: https://www.credly.com/{your-credential-id}
- IBM Certifications: https://www.coursera.org/account/accomplishments

## Image Preview Gallery

The portfolio already displays:
- ✅ Professional gallery layout on the home page
- ✅ Hover effects and animations
- ✅ Responsive grid (auto-fits to screen size)
- ✅ Image metadata (title, issuer, date)
- ✅ Mobile-friendly design

## How to Use

1. Collect your certification images (PNG or JPG format)
2. Copy them to `public/certifications/` 
3. Name them according to the list above
4. Run `npm run dev` to see them in the gallery

## Missing Images

If an image file is not found:
- The gallery will still display the certification card
- The image placeholder will be empty (graceful fallback)
- The text details will still show (title, issuer, date)

## Image Specifications

- **Format**: PNG or JPG (PNG recommended for badges)
- **Size**: 240-300 pixels wide (will be displayed at 240px max)
- **Max file size**: 500KB each
- **Aspect ratio**: Any ratio works (won't distort)

## Example Directory Structure

```
portfolio/
├── public/
│   └── certifications/
│       ├── aws-cloud-practitioner.png
│       ├── aws-developer-associate.png
│       ├── azure-administrator.png
│       ├── databricks-fundamentals.png
│       ├── ibm-gen-ai-python.png
│       ├── ibm-data-analysis.png
│       ├── ibm-ai-flask.png
│       ├── ibm-python-data-science.png
│       └── README.md
└── src/
    └── app/
        └── page.js
```

## Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive on Linux/Mac)
- Verify files are in `public/certifications/` folder
- Check file format is PNG or JPG
- Rebuild with `npm run build`

**Images look pixelated?**
- Use higher resolution source images
- Minimum recommended: 300px × 300px

**Want to change the layout?**
- Edit `src/styles/portfolio.less` under `.cert-gallery` to change grid columns
- Modify `src/app/page.js` if you want to reorder or hide certifications
