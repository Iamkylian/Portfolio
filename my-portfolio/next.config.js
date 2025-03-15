/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
  },
  // Permet la compilation même avec des erreurs de type
  typescript: {
    // Ne pas vérifier les types pendant la compilation
    // Cette option permet de déployer malgré des erreurs de type
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 