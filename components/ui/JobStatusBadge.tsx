import React from 'react';
import { JobStatus } from '@/types/job';
import { Badge } from '@/components/ui/Badge';

interface JobStatusBadgeProps {
  status: JobStatus;
  className?: string;
}

export function JobStatusBadge({ status, className }: JobStatusBadgeProps) {
  switch (status) {
    case 'Open':
      return <Badge variant="success" className={className}>Open Vacancy</Badge>;
    case 'Interview Scheduled':
      return <Badge variant="warning" className={className}>Interview Scheduled</Badge>;
    case 'Processing':
      return <Badge variant="european" className={className}>Application Processing</Badge>;
    case 'Closed':
      return <Badge variant="neutral" className={className}>Closed</Badge>;
    default:
      return <Badge variant="default" className={className}>{status}</Badge>;
  }
}
