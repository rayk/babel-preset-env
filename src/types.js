//@flow

// Targets
export type Target = string;
export type Targets = {
  [target: string]: Target,
};

// Options
// Use explicit modules to prevent typo errors.
export type ModuleOption = false | "amd" | "commonjs" | "systemjs" | "umd";
export type BuiltInsOption = false | "entry" | "usage";
export type Options = {
  targets: Targets,
  loose: boolean,
  include: Array<string>,
  exclude: Array<string>,
  moduleType: ModuleOption,
  debug: boolean,
  useSyntax: boolean,
  useBuiltIns: BuiltInsOption,
};

// Babel
export type Plugin = [Object, Object];
