import { buildOptions } from './types/config';
import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolve';

export function buildWebpackConfig(options: buildOptions):webpack.Configuration{
    const {mode, paths}=options;
    return {
    mode,
    entry: paths.entry,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.build,
        clean: true
    },
    plugins: buildPlugins(options),
        
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    }
}