/* styles/energyBilling.scss */

.billing-dashboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .summary-card {
    flex: 1 1 30%;
    background-color: #ffffff;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      font-size: 1.2rem;
      color: #495057;
    }
  }

  @media (max-width: 768px) {
    .summary-card {
      flex: 1 1 100%;
    }
  }
}
