import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

const PageMeta = ({ 
  title = 'Pascal Pongchinda - Full-Stack Developer Portfolio',
  description = 'Portfolio of Pascal Pongchinda, Full-Stack Developer with over 3 years of experience in web development (PHP and JS based) and 2 years as a part-time 3D visualizer.',
  keywords = 'Pascal Pongchinda, Full-Stack Developer, Web Developer, PHP Developer, JavaScript Developer, React Developer, Portfolio, Thailand, Bangkok',
  ogImage = '/logo512.png',
  ogType = 'website'
}: PageMetaProps) => {
  const fullTitle = title.includes('Pascal Pongchinda') ? title : `${title} | Pascal Pongchinda`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta tags */}
      <meta name="author" content="Pascal Pongchinda" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default PageMeta;

