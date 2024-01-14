// import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'

async function SiteLayout(props: React.PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      {props.children}
      {/* <Footer /> */}
    </>
  )
}

export default SiteLayout
