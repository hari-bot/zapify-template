import navigation from "@/config/navigation.json";

// Components
import Header11 from "@/components/elements/header/header11";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="beatrice-medium root-layout" theme-setting="style-11">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <Header11 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="max-w-[1920px] mx-auto">{children}</div>
          <Footer2
            footerNav={navigation.footer2}
            className="mx-[10px] lg:mx-[30px] bg-sec_bg rounded-t-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
