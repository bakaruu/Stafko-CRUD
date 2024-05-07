import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { Project } from '../entities/project.entity';
export interface UpdateProjectPort {
    updateProject(id: string, updateProjectDto: UpdateProjectDto): Promise<Project>;
}
