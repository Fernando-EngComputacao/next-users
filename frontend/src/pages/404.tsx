import { ErrorLayer } from "@/components";
import { createPage } from "@/components/create-page";

export default createPage({
  title: "Users - Error",
  renderComponent: () => (
    <ErrorLayer title="The page you are trying to view cannot be displayed" description="What do you want to do?" />
  ),
});
