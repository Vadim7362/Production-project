import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';


export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-env'],
            "plugins": [
                [
                    "i18next-extract",
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }
                ],
            ]
        }
    }
}

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woof2|woof)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = buildCssLoader(isDev);

  // Если не используем typescript, нужен еще babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
  }
  
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ]
}
