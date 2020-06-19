class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        N = len(dominoes)
        forces = [0] * N
        
        force = 0
        for i in range(N):
            if dominoes[i] == 'R':
                force = N
            elif dominoes[i] == 'L':
                force = 0
            else:
                force = max(force - 1,0)
            forces[i] += force
        
        force = 0
        for i in range(N-1,-1,-1):
            if dominoes[i] == 'L':
                force = N
            elif dominoes[i] == 'R':
                force = 0
            else:
                force  = max(force - 1,0)
            forces[i] -= force
        
        return "".join('L' if force < 0 else 'R' if force > 0 else '.' for force in forces )
