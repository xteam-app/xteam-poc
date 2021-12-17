import { create } from 'twrnc';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindConfig = require('../../tailwind.config');
const tw = create(tailwindConfig);

export { tw };
