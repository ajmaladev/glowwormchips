import { Skeleton } from "@/components/ui/skeleton"

export function CategorySkeleton() {
  return (
    <section className="w-full py-12" aria-hidden="true">
      <div className="container mx-auto">
        {/* Section Header Skeleton */}
        <div className="mb-8 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-72 mx-auto" />
        </div>

        {/* Grid of Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Category Image */}
              <Skeleton className="w-32 h-32 rounded-full mb-4" />
              {/* Category Title */}
              <Skeleton className="h-5 w-24 mb-2" />
              {/* Category Description */}
              <Skeleton className="h-4 w-36" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionSkeleton() {
  return (
    <section className="w-full py-12" aria-hidden="true">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col">
              {/* Image placeholder */}
              <Skeleton className="w-full aspect-square rounded-lg mb-4" />
              {/* Title */}
              <Skeleton className="h-6 w-3/4 mb-2" />
              {/* Description */}
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 