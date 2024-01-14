import Container from '@/core/ui/Container'
import Heading from '@/core/ui/Heading'
import SubHeading from '@/core/ui/SubHeading'

const page = () => {
  return (
    <div className={'flex flex-col space-y-16'}>
      <Container>
        <div className={'flex flex-col space-y-2.5'}>
          <Heading type={2}>Ready to take your SaaS business to the next level?</Heading>

          <SubHeading>Get started on our free plan and upgrade when you are ready.</SubHeading>
        </div>
      </Container>
    </div>
  )
}

export default page
