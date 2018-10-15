const fs = require('fs');
const typedoc = require('typedoc');

const options = {
  emitDecoratorMetadata: true,
  exclude: '**/+(*.spec.ts)',
  excludePrivate: true,
  experimentalDecorators: true,
  ignoreCompilerErrors: true,
  mode: 'modules',
  module: 'commonjs',
  moduleResolution: 'node',
  out: 'docs/ts',
  preserveConstEnums: true,
  stripInternal: true,
  suppressExcessPropertyErrors: true,
  suppressImplicitAnyIndexErrors: true,
  target: 'ES5',
};

const inputDirs = ['./src'];

const typedocApp = new typedoc.Application(options);
const src = typedocApp.expandInputFiles(inputDirs);
const project = typedocApp.convert(src);

console.log('Generating HTML typedocs');
typedocApp.generateDocs(project, options.out);
