import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Mock data fallback if Supabase is not fully configured or empty
const fallbackProducts = [
  { id: 1, name: 'Premium Atlantic Salmon', category: 'fish', description: 'Fresh, sustainably farmed Atlantic Salmon. Ideal for fine dining.', origin: 'Norway', available_weights: ['Whole: 4-6kg', 'Fillet: 1-2kg'], image_url: '' },
  { id: 2, name: 'Black Tiger Prawns', category: 'prawns', description: 'Large, flavorful Black Tiger Prawns, IQF frozen.', origin: 'India', available_weights: ['16/20', '21/25', '26/30'], image_url: '' },
  { id: 3, name: 'Live Mud Crab', category: 'shellfish', description: 'Premium live mud crabs, air-flown for maximum freshness.', origin: 'Sri Lanka', available_weights: ['500g-1kg', '1kg+'], image_url: '' },
  { id: 4, name: 'Whole Cleaned Squid', category: 'cephalopods', description: 'U5 grade whole cleaned squid tubes and tentacles.', origin: 'India', available_weights: ['Block Frozen 2kg', 'IQF 1kg'], image_url: '' },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams;

  let products = [];

  try {
    let query = supabase.from('products').select('*');
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    const { data, error } = await query;
    if (error) throw error;
    products = data || [];
  } catch (err) {
    console.error('Error fetching products:', err);
    // Use fallback data for preview purposes
    products = fallbackProducts.filter(p => !category || category === 'all' || p.category === category);
  }

  const categories = [
    { label: 'All Products', value: 'all' },
    { label: 'Fish', value: 'fish' },
    { label: 'Prawns', value: 'prawns' },
    { label: 'Shellfish', value: 'shellfish' },
    { label: 'Cephalopods', value: 'cephalopods' },
    { label: 'Processed', value: 'processed' },
  ];

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 border-b border-brand-graphite/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Product Catalogue</h1>
          <p className="text-xl text-brand-graphite max-w-2xl">
            Explore our extensive range of premium seafood. Sourced responsibly and delivered at peak freshness.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <h3 className="text-lg font-bold text-brand-charcoal mb-4 uppercase tracking-wider">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((c) => {
                const isActive = (category === c.value) || (!category && c.value === 'all');
                return (
                  <Link 
                    key={c.value} 
                    href={`/products${c.value !== 'all' ? `?category=${c.value}` : ''}`}
                    className={`px-4 py-3 text-sm font-medium transition-colors border-l-2 ${isActive ? 'border-brand-saffron bg-white text-brand-saffron' : 'border-transparent text-brand-graphite hover:bg-white hover:text-brand-charcoal'}`}
                  >
                    {c.label}
                  </Link>
                )
              })}
            </div>
            
            <div className="mt-12 p-6 bg-brand-charcoal text-white rounded-sm">
              <h4 className="font-bold mb-2">Need a custom order?</h4>
              <p className="text-sm text-gray-400 mb-4">We cater to specific processing and sizing requirements.</p>
              <Link href="/contact">
                <Button variant="primary" className="w-full text-sm">Contact Sales</Button>
              </Link>
            </div>
          </aside>

          {/* Product List */}
          <main className="flex-1">
            <div className="flex flex-col gap-6">
              {products.length === 0 ? (
                <div className="p-12 text-center bg-white border border-brand-graphite/10">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-2">No products found</h3>
                  <p className="text-brand-graphite">We couldn't find any products in this category.</p>
                </div>
              ) : (
                products.map((product) => (
                  <div key={product.id} className="bg-white p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border border-brand-graphite/5 hover:border-brand-saffron/30 transition-colors group">
                    {/* Product Image Placeholder */}
                    <div className="w-full md:w-48 h-48 bg-brand-cream border border-brand-graphite/10 shrink-0 flex items-center justify-center relative overflow-hidden group-hover:bg-brand-charcoal transition-colors">
                      {product.image_url ? (
                        <Image src={product.image_url} alt={product.name} fill className="object-cover" />
                      ) : (
                        <span className="text-brand-graphite/30 font-bold group-hover:text-white/20 transition-colors uppercase tracking-widest text-sm">Image</span>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-bold text-brand-charcoal group-hover:text-brand-saffron transition-colors">{product.name}</h2>
                        <span className="text-xs font-bold bg-brand-cream text-brand-graphite px-3 py-1 uppercase tracking-wider hidden sm:block">
                          {product.category}
                        </span>
                      </div>
                      
                      <p className="text-brand-graphite mb-6 line-clamp-2">{product.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 md:mb-0">
                        <div>
                          <p className="text-xs text-brand-graphite uppercase tracking-wider mb-1">Origin</p>
                          <p className="font-semibold text-brand-charcoal">{product.origin || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-xs text-brand-graphite uppercase tracking-wider mb-1">Variants</p>
                          <div className="flex flex-wrap gap-2">
                            {product.available_weights && product.available_weights.length > 0 ? (
                              product.available_weights.map((w: string, i: number) => (
                                <span key={i} className="text-sm border border-brand-graphite/20 px-2 py-0.5 text-brand-charcoal">{w}</span>
                              ))
                            ) : (
                              <span className="text-sm text-brand-graphite">Standard</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="w-full md:w-auto shrink-0 flex items-center justify-end">
                      <Link href={`/contact?interest=${encodeURIComponent(product.name)}`} className="w-full md:w-auto">
                        <Button variant="outline" className="w-full md:w-auto whitespace-nowrap">
                          Request Bulk Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
