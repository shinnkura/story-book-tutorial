import { Meta } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
};

export default meta;

export const BaseCircle = {};
export const GreenCircle = {};
export const YellowCircle = {};

// import { Meta, Story } from "@storybook/react";
// import Circle from "./Circle";

// const meta: Meta<typeof Circle> = {
//   component: Circle,
//   title: "Circle",
// };

// export default meta;

// export const BaseCircle: Story = () => <Circle />;
