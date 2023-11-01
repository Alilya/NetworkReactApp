import webpack, { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';


export function buildResolvers(options: BuildOptions):ResolveOptions{
    return {  
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [__dirname, 'src', 'node_modules'],
        mainFiles:['index'],
        alias:{}
    }
}