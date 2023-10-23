import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode == 'development';

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        port: PORT,
        paths,
        isDev,
    });

    return config
}
