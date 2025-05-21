
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  className?: string;
  children: ReactNode;
  actions?: ReactNode;
}

const DashboardCard = ({
  title,
  className,
  children,
  actions,
}: DashboardCardProps) => {
  return (
    <div className={cn("glass-card rounded-lg", className)}>
      <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <h2 className="font-semibold text-lg">{title}</h2>
        {actions && <div className="flex space-x-2">{actions}</div>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default DashboardCard;
