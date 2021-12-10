import { BaseLayout } from '../layouts';
import { DecoratorFn } from '@storybook/react';

const baseLayoutDecorator: DecoratorFn = (Story) => <BaseLayout>{Story()}</BaseLayout>;

export { baseLayoutDecorator };
