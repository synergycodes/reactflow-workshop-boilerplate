import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
  type Node,
  type Edge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: '1' },
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: '2' },
  },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Diagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    ></ReactFlow>
  );
}
