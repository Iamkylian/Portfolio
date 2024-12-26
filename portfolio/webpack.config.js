module.exports = {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]', // Personnalisation du nom des fichiers
                outputPath: 'assets/pdf', // Dossier de sortie pour les fichiers PDF
              },
            },
          ],
        },
      ],
    },
  };
  