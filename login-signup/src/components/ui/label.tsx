import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>, // 라벨의 ref 타입을 지정
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & // 라벨 컴포넌트의 prop과 labelVariants의 prop을 병합
    VariantProps<typeof labelVariants> // labelVariants의 다양한 스타일 prop을 사용
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
