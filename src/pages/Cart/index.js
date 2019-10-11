import React from 'react';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/chuteira-campo-nike-mercurial-superfly-7-club-fg/58/HZM-1880-058/HZM-1880-058_detalhe2.jpg?ims=326x"
                alt="Tenis"
              />
            </td>

            <td>
              <strong>Chuteira TOP</strong>
              <span>129,90</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value="1" />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>$258,80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,39</strong>
        </Total>
      </footer>
    </Container>
  );
}
