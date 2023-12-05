import { createPage } from "@/components/create-page";
import Test from "@/screens/user/teste";

export default createPage({
  title: "User",
  renderComponent: () => <Test />,
  // renderComponent: () => <User name="Fernando Furtado" email="carrilho.furtado@gmail.com" random={67973} />,
});
