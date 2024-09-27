import navigation from "@/config/navigation.json";

// Components
import Header8 from "@/components/elements/header/header8";
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
    <div className="instrument-bold root-layout" theme-setting="style-8">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <Header8 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="max-w-[1920px] mx-auto">{children}</div>
          <Footer2 footerNav={navigation.footer2} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
