import navigation from "@/config/navigation.json";

// Components
import Header7 from "@/components/elements/header/header7";
import Footer4 from "@/components/elements/footer/footer4";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="PPFragment-TextRegular root-layout" theme-setting="style-7">
      <ScrollSmootherComponent />
      <ScrollTop />
      <ToolsComponent />
      <Header7 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="max-w-[1920px] overflow-hidden mx-auto bg-[#05111A] ">
            {children}
          </div>
          <Footer4 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
