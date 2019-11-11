import React from "react";
import { Text } from "rebass";

const P = (props: any) => <Text {...props} fontSize={[3, 4, 5]} />;

const Em = (props: any) => (
  <Text {...props} fontSize={[1, 2, 3]} fontWeight="bold" />
);

const Small = (props: any) => <Text {...props} fontSize={[0, 1, 2]} />;

export { P, Em, Small };
