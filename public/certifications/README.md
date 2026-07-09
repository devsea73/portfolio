# Certificate Images

Place your certification images in this folder with the following filenames for the portfolio gallery to display them.

## Expected Image Files

The portfolio expects the following image files in this directory:

1. **aws-cloud-practitioner.png** - AWS Certified Cloud Practitioner badge
2. **aws-developer-associate.png** - AWS Certified Developer - Associate badge
3. **azure-administrator.png** - Microsoft Certified: Azure Administrator Associate badge
4. **databricks-fundamentals.png** - Databricks Accredited Databricks Fundamentals certificate
5. **ibm-gen-ai-python.png** - IBM: Building Generative AI-Powered Applications with Python
6. **ibm-data-analysis.png** - IBM: Data Analysis with Python
7. **ibm-ai-flask.png** - IBM: Developing AI Applications with Python and Flask
8. **ibm-python-data-science.png** - IBM: Python for Data Science, AI & Development

## Image Guidelines

- **Format**: PNG or JPG/JPEG
- **Recommended size**: 240x300 pixels minimum
- **Aspect ratio**: Any ratio works (portrait badges ~1:1.25, certificates ~8.5:11)
- **File size**: Keep under 500KB each for optimal loading

## Using Next.js Image Component

The portfolio uses Next.js Image component which automatically:
- Optimizes images for different screen sizes
- Provides lazy loading for better performance
- Shows grayscefully if images are missing

If an image is not found, the gallery will still display but that item will show empty image placeholder.
