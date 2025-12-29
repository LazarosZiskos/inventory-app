import prisma from "../lib/prisma";

export default async function DashboardPage() {
  const products = await prisma.product.findUnique({
    where: { id: "cmjrk40cp0000ngpgwuyuvpnj" },
  });
  return (
    <div className="flex items-center justify-center ">
      {products?.name}
      <span className="pl-4">${products?.price.toFixed(2)}</span>
    </div>
  );
}
