package com.phegondev.InventoryMgtSystem.dtos;

import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Builder
public class DashboardStatsDto {
    private BigDecimal totalSales;
    private BigDecimal totalPurchases;
    private Long totalTransactions;
    private Long lowStockCount; // Count of items with stock < 10
}