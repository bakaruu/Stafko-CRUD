import { Repository } from 'typeorm';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { UpdateProjectPort } from '../../domain/ports/update-project.port';
export declare class UpdateProjectAdapter implements UpdateProjectPort {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    updateProject(id: string, updateProjectDto: UpdateProjectDto): Promise<Project>;
}
