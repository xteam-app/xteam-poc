import { BaseLayout } from '../layouts';
import { DecoratorFn } from '@storybook/react';
import { Container } from '../layouts/Container';

const baseLayoutDecorator: DecoratorFn = (Story) => <BaseLayout>{Story()}</BaseLayout>;
const containerDecorator: DecoratorFn = (Story) => <Container>{Story()}</Container>;

export { baseLayoutDecorator, containerDecorator };
