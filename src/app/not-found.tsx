import Button from '@/core/ui/Button'

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen animate-in fade-in duration-1000 slide-in-from-top-12">
      <div className="text-center dark:text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="text-gray-500">Oops! The page you are looking for might be in another castle.</p>
        <Button className="mt-5 dark:bg-gray-700 dark:text-white bg-gray-300 text-gray-800 rounded-md  transition duration-300 hover:bg-gray-400 ">
          Back To Homepage
        </Button>
      </div>
    </div>
  )
}

export default PageNotFound
