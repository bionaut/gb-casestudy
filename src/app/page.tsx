import { IntroSection } from './(sections)/intro-section'
import { ProductsSection } from './(sections)/products-section'
import { getProducts } from '../api-client/api-client'

export const dynamic = 'force-dynamic'

export default async function RootPage({ searchParams }: { params: any; searchParams: any }) {
  const { error, filters, data = [] } = await getProducts(searchParams)
  return (
    <div className={'relative z-0 space-y-8'}>
      <IntroSection />
      {!error && <ProductsSection filters={filters} products={data || []} />}
    </div>
  )
}
