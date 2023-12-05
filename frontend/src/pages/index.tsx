import { createPage } from "@/components/create-page";
import { Home } from "@/screens/home/home";

export default createPage({
  title: "Home",
  renderComponent: () => <Home />,
});
