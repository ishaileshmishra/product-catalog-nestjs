import { PipeTransform, BadRequestException } from '@nestjs/common';
import { DeliveryStatus } from '../product.model';

// Custom pipe implementation.
export class ProductStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    DeliveryStatus.ORDERED,
    DeliveryStatus.IN_PROGRESS,
    DeliveryStatus.DELIVERED,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
