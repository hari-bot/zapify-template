import navigation from "@/config/navigation.json";

// Components
import Header1 from "@/components/elements/header/header1";
import Footer1 from "@/components/elements/footer/footer1";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="colasta-bold">
      <ScrollSmootherComponent />
      {/* <ToolsComponent /> */}
      <ScrollTop />
      <Header1 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="absolute w-full h-[1100px] top-0 start-0 -z-[1] bg-gradient-180 from-[#FBF7F4] to-[#fbf7f400]" />
          <div className="pt-[100px]">{children}</div>
          <Footer1 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
