"use client"
import { addNewProductService } from "@/services/addNewProductService"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CreatedProductTable() {
  const { category, subCategory, showTable, result, reset } =
    addNewProductService()

  return showTable ? (
    <div className="my-8 bg-white rounded-3xl p-4 w-full md:w-3/5 lg:w-1/2 mx-auto">
      <div className="w-full flex justify-between items-center p-3 font-medium text-2xl">
        <h2>Product details</h2>
      </div>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Key</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Category</TableCell>
            <TableCell>{category.label}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sub Category</TableCell>
            <TableCell>{subCategory.label}</TableCell>
          </TableRow>
          {result.map(({ label, value }, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{label}</TableCell>
              <TableCell>{value || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        type="button"
        variant="default"
        onClick={() => reset()}
        className="mt-5 w-full"
      >
        Reset Form
      </Button>
    </div>
  ) : null
}
