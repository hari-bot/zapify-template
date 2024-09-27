import Header10 from "@/components/elements/header/header10";
import Footer2 from "@/components/elements/footer/footer2";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";
import navigation from "@/config/navigation.json";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="instrument-semibold root-layout" theme-setting="style-10">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <Header10 headerNav={navigation.header} />
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
