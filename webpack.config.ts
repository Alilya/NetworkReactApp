import webpack from 'webpack';
import path from 'path';
import { BuildEnv } from './config/build/types/config';
import { BuildPath } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode == 'development';

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname,'src'),
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        port: PORT,
        paths,
        isDev,
    });

    return config
}
