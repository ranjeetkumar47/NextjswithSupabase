import Container from '@/core/ui/Container'
import Heading from '@/core/ui/Heading'
import SubHeading from '@/core/ui/SubHeading'

const Homepage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center">
      <Container>
        <div className="flex flex-col space-y-8 text-center">
          <Heading type={2} className="text-4xl font-bold text-gray-800 dark:text-white">
            Elevate Your Business Skyward with Sky Digi Soft
          </Heading>

          <SubHeading className="text-gray-600 dark:text-gray-300">
            Welcome to Sky Digi Soft, where innovation meets excellence in the digital realm. We are a dynamic IT company committed to transforming
            ideas into impactful solutions. Our mission is to propel businesses forward through cutting-edge technology, creative digital strategies,
            and tailored software solutions. At Sky Digi Soft, we embrace the vast possibilities of the digital sky, offering a comprehensive suite of
            services that includes web development, software engineering, and digital marketing. Our team of skilled professionals is dedicated to
            delivering results that transcend expectations. Join us on a journey where the digital horizon knows no bounds. Elevate your business with
            Sky Digi Soft – Your Vision, Our Expertise.
          </SubHeading>
        </div>
      </Container>
    </div>
  )
}

export default Homepage
