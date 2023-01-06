export default function Index() {
  return <h1>Hello World</h1>
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
