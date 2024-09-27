import navigation from "@/config/navigation.json";

// Components
import Header6 from "@/components/elements/header/header6";
import Footer3 from "@/components/elements/footer/footer3";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/scroll-top";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="plus_jakarta_sans-medium root-layout"
      theme-setting="style-6"
    >
      <ScrollSmootherComponent />
      <ScrollTop />
      <ToolsComponent />
      <Header6
        headerNav={navigation.header}
        signUpBtnClassName="border border-transparent hover:border-[#41494D]"
      />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="max-w-[1920px] overflow-hidden mx-auto bg-[#05111A] ">
            {children}
          </div>
          <Footer3 footerNav={navigation.footer3} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
