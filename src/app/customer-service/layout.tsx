import navigation from "@/config/navigation.json";

import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import Header5 from "@/components/elements/header/header5";
import Footer1 from "@/components/elements/footer/footer1";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";
import Notification1 from "@/components/elements/notification/notification1";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const notification = getMainPage("/notifications/notification1.mdx");

  return (
    <div className="pt-serif-regular root-layout" theme-setting="style-5">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <Header5
        headerNav={navigation.header}
        signUpBtnClassName="bg-btn-bg-hover hover:bg-btn-bg-main"
      >
        <Notification1 notification={notification} />
      </Header5>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="max-w-[1920px] overflow-hidden mx-auto">
            {children}
          </div>
          <Footer1 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
