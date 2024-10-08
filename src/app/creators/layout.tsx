import navigation from "@/config/navigation.json";

// Components
import Header2 from "@/components/elements/header/header2";
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
    <div className="colasta-bold root-layout" theme-setting="style-13">
      <ScrollSmootherComponent />
      {/* <ToolsComponent /> */}
      <ScrollTop />
      <Header2 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="absolute w-[988.54px] h-[473.3px] top-0 end-[45%] -z-[1] opacity-80 blur-[250px] bg-gradient-120 from-[#F58529] from-[11.58%] via-[#DD2A7B] via-[50%] to-[#515BD4] to-[82.42%]" />

          <div className="pt-[100px]">{children}</div>
          <Footer2 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
